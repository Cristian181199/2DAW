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
        <?php if (isset($_GET['anyo'])): ?>
            <?php $anyo = trim($_GET['anyo']) ?>
                <?php if ($anyo != ''): ?>
                    <?php if (ctype_digit($anyo) && $anyo <= 9999): ?>
                        <p>Naciste en <?= $anyo ?>y tienes <?= date('Y') - $anyo ?> años.</p>
                    <?php else: ?>
                        <h2>Error: el año tiene que ser un numero</h2> 
                    <?php endif ?>
                <?php endif ?>
            <?php endif ?>
            <a href="index.php"> Volver</a>
    </body>
</html>