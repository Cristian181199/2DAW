<?php
/**
 * @author Cristian Quintero
 * @copyright Copyright (c) 2021 Cristian Quintero
 * @license http://www.gnu.org/licenses/gpl-3.0.txt
 */

/**
 * auxiliar.php - Funciones auxiliares
 */

function conectar()
{
    $pdo = new PDO('pgsql:host=localhost;dbname=biblioteca', 'cristian', 'cristian1234');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}


function volver()
{
    header('Location: ../libros/index.php');
}

function error($mensaje)
{ ?>
    <h3><?= $mensaje ?></h3><?php
    return true;
}

function recoger($tipo, $nombre)
{
    return filter_input($tipo, $nombre, FILTER_CALLBACK, [
        'options' => 'trim'
    ]);
}

function recoger_get($nombre)
{
    return recoger(INPUT_GET, $nombre);
}

function recoger_post($nombre)
{
    return recoger(INPUT_POST, $nombre);
}

function flash()
{
    if (isset($_SESSION['flash'])) {
        echo "<h3>{$_SESSION['flash']}</h3>";
        unset($_SESSION['flash']);
    }
}

/**
 * Aplica filtrado a la salida.
 * 
 * @param string $s La cadena que hay que filtrar.
 * @return string La cadena filtrada.
 */
function hh($s)
{
    return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE);
}

function banner()
{
    if (!isset($_COOKIE['acepta_cookies'])): ?>
        <h2>
            Este sitio usa cookies.
            <a href="cookies.php">Aceptar</a>
        </h2><?php
    endif;
}

function head()
{
    banner();
    flash();
}

function paginador($pag, $npags, $params)
{ ?>
    <div class="row">
        <div class="col">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <?php if ($pag > 1): ?>
                        <li class="page-item">
                            <a class="page-link" href="?pag=<?= ($pag - 1) . "$params" ?>" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                    <?php else: ?>
                        <li class="page-item disabled">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                    <?php endif ?>
                    <?php for ($i = 1; $i <= $npags; $i++): ?>
                        <?php if ($pag == $i): ?>
                            <li class="page-item active">
                                <span class="page-link">
                                    <?= $i ?>
                                    <span class="sr-only">(current)</span>
                                </span>
                            </li>
                        <?php else: ?>
                            <li class="page-item">
                                <a class="page-link" href="?pag=<?= "$i$params" ?>">
                                    <?= $i ?>
                                </a>
                            </li>
                        <?php endif ?>
                    <?php endfor ?>
                    <?php if ($pag < $npags): ?>
                        <li class="page-item">
                            <a class="page-link" href="?pag=<?= ($pag + 1) . "$params" ?>" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    <?php else: ?>
                        <li class="page-item disabled">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    <?php endif ?>
                </ul>
            </nav>
        </div>
    </div><?php
}