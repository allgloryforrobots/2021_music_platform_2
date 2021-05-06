import {HttpModuleOptions} from '@nestjs/common'
import {TrackModule} from './track/track.module'
import {MongooseModule} from '@nestjs/mongoose'
import { FileModule } from './file/file.module'
import * as path from 'path'
import {ServeStaticModule} from '@nestjs/serve-static'
import {Module} from '@nestjs/common'
import config from '../config/configuration'



@Module({
    imports: [
        ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
        MongooseModule.forRoot(config.mongoUri),
        TrackModule,
        FileModule,
    ]
})
export class AppModule {}