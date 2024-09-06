import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { OrderService } from './order.service';
import { CreateOrderRequestDto } from './order.dto';
import { CreateOrderResponse, ORDER_SERVICE_NAME } from './proto/order.pb';

@Controller('order')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @GrpcMethod(ORDER_SERVICE_NAME, 'CreateOrder')
  private async createOrder(
    data: CreateOrderRequestDto,
  ): Promise<CreateOrderResponse> {
    return this.service.createOrder(data);
  }
}
