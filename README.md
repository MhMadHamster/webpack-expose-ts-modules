run

`yarn start && yarn webpack`

You will recieve error in console `Cannot read property 'hooks' of undefined`.

The error starts occuring only since `expose-loader` version `1.0.0` and only when used in combination `expose-loader` + `thread-loader` + `ts-loader` when trying to expose any `*.ts` module.