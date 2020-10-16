<html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hola Mundo</title>
    </head>

    <body>
    <?php if (isset($_GET['nombre'])): ?>
            <?php $nombre = trim($_GET['nombre']); ?>
            <?php if ($nombre != ''): ?>
                <h3>¡Hola, <?= $nombre ?>!</h3>
            <?php else: ?>
                <h2>Error: El nombre no puede ser vacio</h2>
            <?php endif ?>
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
        <form action="index.php" method="get">
            <label for="nom"> Escribe tu nombre:* </label>
            <input type="text" name="nombre" id="nom"> <br>
            <label for="anyo"> Escribe tu año de nacimiento: </label>
            <input type="text" name="anyo" id="anyo" size="10"> <br>
            <button type="submit">Saludar</button>
        </form>
    </body>

</html>