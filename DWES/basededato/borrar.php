<?php
if (isset($_POST['id'])) {
    $id = trim($_POST['id']);
    $pdo = new PDO('pgsql:host=localhost;dbname=prueba', 'cristian', 'cristian');
    $sent = $pdo->prepare('DELETE FROM depart WHERE id = :id');
    $sent->execute([':id' => $id]);
}
header('Location: index.php');