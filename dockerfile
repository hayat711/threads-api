# installing dependencies:
FROM node:18-alpine 

WORKDIR /user/src/app

# Copy package.json and package-lock.json
COPY package*.json yarn.lock ./

RUN yarn install --frozen-lockfile
# Bundle app source code
COPY . .


RUN yarn prisma generate
COPY prisma ./prisma/


RUN yarn build
RUN chown -R node:node /user/src/app

EXPOSE 4000

USER node


CMD ["yarn", "run", "start:prod"]


