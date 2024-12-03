import {Controller, Module, Get} from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {

    @Get()
    getRootRoute() {
        return "Hi there...";
    }
}

@Module({
    controllers: [AppController],
})
export class AppModule {}


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.listen(3000);
}

bootstrap();