FROM node:10-alpine as builder
WORKDIR /app
COPY . .
RUN npm install -g pg
RUN npm install --production
RUN npm install -g @vercel/ncc
RUN ncc build index.js -o dist

FROM node:10-alpine
WORKDIR /app
COPY --from=builder /app/dist/index.js .
CMD ["node", "index.js","PROD"]