

import express from 'express';
import gatewayRoutes from './routes/gatewayRoutes.js';

const app = express();

app.use('/', gatewayRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`API Gateway server is running on port ${PORT}`);
});
