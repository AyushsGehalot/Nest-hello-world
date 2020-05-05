import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { PostgresTypeOrmConfigService } from './postgres-typeorm.config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: PostgresTypeOrmConfigService,
        }),
    ],
})
export class DatabaseModule {}
