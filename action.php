<?php
if (isset($_POST['fio']) && isset($_POST['email'])){
    //echo cfg_file_path;
    $name = $_POST['fio'];
    $text = $_POST['email'];
    $array = parse_ini_file("config.ini");
    
    $db_host = $array['DB_HOST'];
    $db_user = $array['DB_LOGIN'];
    $db_password = $array['DB_PASSWORD'];
    $db_base = $array['DB_BASE'];
    $db_table = $array['DB_TABLE'];
    
    
    $mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);
    $mysqli->set_charset('utf8');
    
    if ($mysqli->connect_error) {
        die('Ошибка : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
    }
    
    $result = $mysqli->query("INSERT INTO ".$db_table." (Name,Email, CreatedAt) VALUES ('$name','$text',now())");
    
    
    if ($result) 
    {
        echo '<script>alert("Скоро мы вам отправим каталог!");</script>';
        echo '<script>window.location = \'index.html\';</script>';
        exit();
    }
    
    
}