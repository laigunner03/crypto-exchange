import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WalletModule } from './wallet/wallet.module';
import { FeedModule } from './feed/feed.module';
import { TradeModule } from './trade/trade.module';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: ['.env.development'], isGlobal: true }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            autoLoadEntities: true,
            synchronize: true,
        }),
        AccountModule,
        WalletModule,
        FeedModule,
        TradeModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
