<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saludar</title>
</head>
    <body>
        <?php if (isset($_GET['nombre'])): ?>
            <?php $nombre = trim($_GET['nombre']); ?>
                <?php if ($nombre != ''): ?>
                    <h3>¡Hola, <?= $nombre ?>!</h3>
                <?php else: ?>
                    <h2>Error: El nombre no puede ser vacio</h2>
                <?php endif ?>
        <?php else: ?>
            <h2>Error: Falta el parametro 'nombre'</h2>
        <?php endif ?>
    </body>
</html>