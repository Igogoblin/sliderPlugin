# sliderPlugin

## Подключение jQuery слайдера

1. Подключите jQuery и сборку плагина:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="dist/index.js"></script>
<link rel="stylesheet" href="style.css" />
```

2. Инициализируйте плагин:

```html
<div id="slider"></div>

<script>
  $("#slider").mySlider({
    min: 0,
    max: 100,
    step: 5,
    isVertical: false,
  });
</script>
```

3. Типы поддерживаются через `@types/jquery` и `jquery.mySlider.d.ts`.
