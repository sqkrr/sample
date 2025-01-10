<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "sakura_kano_0613@yahoo.co.jp";
    $subject = "お問い合わせフォームからのメッセージ";
    $body = "名前: $name\nメールアドレス: $email\nメッセージ:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "メールが送信されました。";
    } else {
        echo "メールの送信に失敗しました。";
    }
} else {
    echo "無効なリクエストです。";
}
?>
