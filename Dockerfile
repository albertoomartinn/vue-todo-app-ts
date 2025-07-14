FROM node:22.13.1

RUN npm install -g npm@10.9.2

RUN apt-get update && apt-get install -y \
  xdg-utils \
  git \
  nano \
  curl

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173 6006

CMD ["bash"]
