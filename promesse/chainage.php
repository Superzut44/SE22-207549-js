
<?php 

class Test {

    function method_1()
    {
        return $this;
    }
    function method_2()
    {
        return $this;
    }
    function method_3()
    {
        
    }
    function method_4()
    {
        
    }
}


$truc = new Test();

$truc->method_1();
$truc->method_2();
$truc->method_3();
$truc->method_4();


$truc->method_1()->method_2()->method_4();