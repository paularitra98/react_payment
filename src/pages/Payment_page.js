import { useEffect } from "react";
import $ from 'jquery';
import useRazorpay, { RazorpayOptions } from "react-razorpay";

function Payment_page(){

    const Razorpay=useRazorpay();

    function paynow(){

        var name="Aritra Paul";
        var amt=10;
        
         $.ajax({
               type:'post',
               url:'http://localhost:2000/payment/payins',
               data:"amt="+amt+"&name="+name,
               success:function(result){
                   var options = {
                        "key": "rzp_test_tGvWCPyL6xL4uU", 
                        "amount": amt*100, 
                        "currency": "INR",
                        "name": "Acme Corp",
                        "description": "Test Transaction",
                        "image": "https://image.freepik.com/free-vector/logo-sample-text_355-558.jpg",
                        "handler": function (response){
                           $.ajax({
                               type:'post',
                               url:'http://localhost:2000/payment/payins',
                               data:"payment_id="+response.razorpay_payment_id,
                               success:function(result){
                                //    window.location.href="thank_you.php";
                                alert('successfully paid');
                               }
                           });
                        }
                    };
                    var rzp1 = new Razorpay(options);
                    rzp1.open();
               }
           });
        
  
        
    }

    useEffect(()=>{
        paynow();
    },[]);


    return(
        <>
        <h1>sdvhhj</h1>
        </>
    )


}
export default Payment_page;