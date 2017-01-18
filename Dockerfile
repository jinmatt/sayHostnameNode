FROM mhart/alpine-node:6.9.4
EXPOSE 3000
COPY app.js
CMD node app.js
