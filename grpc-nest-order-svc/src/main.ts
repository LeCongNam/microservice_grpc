import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestMicroservice } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { protobufPackage } from './order/proto/order.pb';
import { join } from 'path';

async function bootstrap() {
  const app: INestMicroservice = await NestFactory.createMicroservice(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50052',
        package: protobufPackage,
        protoPath: join('node_modules/grpc-nest-proto/proto/order.proto'),
      },
    },
  );

  await app.listen();
}
bootstrap();
