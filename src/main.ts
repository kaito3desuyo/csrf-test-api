import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser('secret'));
  // app.use(cookieSession({ secret: 'secret2' }));
  /*
  app.use(
    session({
      secret: 'hogehoge',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
    }),
  );
  */

  app.enableCors({
    origin: true,
    allowedHeaders: 'Content-Type, X-XSRF-Token, CSRF-Token, X-CSRF-Token',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  });

  app.use(
    csurf({
      cookie: { secure: false, httpOnly: true },
    }),
  );

  await app.listen(3031);
}
bootstrap();
