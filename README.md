<h1 align="center">get-slide-direction</h1>
Get the finger slide direction easily in your H5 pages.

## Install
Download the file named "get-slide-direction.min.js" in dist. And move this javascript file into your project.
And you can link the file like below.

```html
<script src="./get-slide-direction.min.js"></script>
```

## Usage
Once you link the file to your project. You'll get a global variable named gsd, which is get-slide-direction in short.

- When move up
```javascript
gsd.onSlideUp = () => {
  console.log('This is up');
}
```

- When move down
```javascript
gsd.onSlideUp = () => {
  console.log('This is down');
}
```

- When move left
```javascript
gsd.onSlideUp = () => {
  console.log('This is left');
}
```

- When move right
```javascript
gsd.onSlideUp = () => {
  console.log('This is right');
}
```

## Sample
You can also use the sample.html to learn how to use this tool.

## License
[MIT](./LICENSE)