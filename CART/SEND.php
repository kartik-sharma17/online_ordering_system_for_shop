
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Succesful</title>
</head>
<body>
    <?php

        $servername ='localhost';
        $password = '';
        $username = 'root';

        $conn = mysqli_connect($servername ,$username ,$password);

        // if(! $conn){
        //     die("connection failed :". mysqli_connect_error());
        // }
        // echo "successfully connected";

        $name =$_GET["Gulab_jamun"];
        $rate =$_GET["rate"];



        $sql ="INSERT INTO rate.`sweet` (`sweet_name`, `sweet_price`) VALUES ('$name', '$rate');";

        
        


        
        if($conn->query($sql) == true){
            echo "data is succesfully inserted";
        }
        else{
            echo "data is not inserted error =",$conn->error;
        }
    ?>
</body>
</html>