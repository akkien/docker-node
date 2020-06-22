FROM node:alpine

# RUN mkdir -p /home/node/docker_node/node_modules && chown -R node:node /home/node/docker_node
WORKDIR /home/node/docker_node

# COPY ./package.json .
# RUN yarn install

COPY --chown=node:node . .
CMD [ "yarn","dev" ]  

# let people know that app listening on port 8080
EXPOSE 8080

USER node

