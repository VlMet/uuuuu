<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email= $_POST['email'];
$what = $_POST['what'];
$class = $_POST['class'];
$smena = $_POST['smena'];
#echo $name.$phone.$email.$what.$class.$smena;
if (mail("metelew.v@yandex.ru", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email.". Номер: ".$phone.". Курс: ".$what.". Класс: ".$class.". Смена: ".$smena ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>
<br>
<a href="index.html">Вернуться на главную</a>