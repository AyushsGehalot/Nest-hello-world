import { resolve } from "path";

export default {
    database: {
        url: "postgres://app:app@localhost/locations" 
    },
    orm: {
        entities: [__dirname + '/../**/**.entity{.ts,.js}'],
        synchronize: false,
    },
    templates: {
        path: resolve(__dirname, '..', 'views'),
    },
    public: {
        path: resolve(__dirname, '..', 'public'),
    },
}