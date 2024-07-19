<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>


    <!-- for bootstrap css -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">


    <!-- for css -->
    <link rel="stylesheet" href="CART.css">

    <!-- including cdn for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- for font used -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Acme&family=Bebas+Neue&family=Kotta+One&family=Oleo+Script+Swash+Caps:wght@400;700&family=Oswald:wght@200..700&display=swap" rel="stylesheet">

    <!-- for font of front -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cantora+One&family=Teko:wght@300..700&display=swap" rel="stylesheet">


</head>

<body>

    <header>
        <div class="uppernavbar">
            <div class="logo">

            </div>
            <div class="icon">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
            </div>
            <div class="searchbar">
                <input type="text" name="searchbar" placeholder="Search">
                <i class="fa-solid fa-magnifying-glass search"></i>
                <i id="cart" class="fa-solid fa-cart-shopping"></i>
                <p id="c_display"></p>
            </div>
        </div>
        <div class="navbar">
            <a href="#front" class="btnhome navbtn">HOME</a>
            <a href="#shop" class="btnhome navbtn">SHOP</a>
            <a href="#contact" class="btnhome navbtn">CONTACT</a>
        </div>
    </header>


    <?php
    $location = $_GET["loca"];
    $items = $_GET["items_added"];
    $rates = $_GET["rates"];

    ?>
    <P id="data"><?php echo $items?></P>
    <P id="data_rates"><?php echo $rates?></P>


    <!-- for bill -->
    <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
            <h1>items Summary</h1>

            <div class="items" id="item_table">
            </div>
        </div>
        <div class="col-2"></div>
    </div>


    <p id="current_items" style="display: none;"><?php echo $items ?></p>









    <!-- for bootstrap js -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <!-- for external js -->
    <script type="text/javascript" src="CART.js"></script>
</body>

</html>