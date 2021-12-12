# Alok and Kid's P5 Samples

## Clone it 

git clone <repo name>

## Run it

You will need http-server 
```
npm i http-server
```

then
```
$ pwd
p5js
$ http-server -c-1 -p 9100
```

should run this in 
```
$ http-server -c-1 -p 9100
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:9100
  http://192.168.0.11:9100
```

## Test it

Each example is an index.html that imports a sketch.js file. The sketch.js has the p5 implementation

For the Anagram example do 
```
http://192.168.0.11:9100/anagram/
```

