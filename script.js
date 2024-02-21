// 
// const seatNumbers = [
//     "A1", "A2", "A3", "A4",
//     "B1", "B2", "B3", "B4",
//     "C1", "C2", "C3", "C4",
//     "D1", "D2", "D3", "D4",
//     "E1", "E2", "E3", "E4",
//     "F1", "F2", "F3", "F4",
//     "G1", "G2", "G3", "G4",
//     "H1", "H2", "H3", "H4",
//     "I1", "I2", "I3", "I4",
//     "J1", "J2", "J3", "J4"
// ];


// const totalPrice = document.getElementById("total-price").innerText;
// const grandTotal = document.getElementById("grandTotal").innerText;



const allSeats = document.getElementsByClassName("seat"); 

let ticketCount = 0;

for( const seatBtn of allSeats){ 
    seatBtn.addEventListener("click", function(event){
        const ticket = ticketCount += 1;

        // const totalTicketPrice = ticket * seatPrice ;
        // const grandPrice = ticket * seatPrice;

        

        const seatName = event.target.innerText;  // seat er name ta ber kora hoyse \\
        const seatPrice = document.getElementById("price").innerText; // seat price ta newa hoyse 
        
        event.target.setAttribute("disabled", false);
        event.target.style.backgroundColor= "green";

        const fastCardCount = getConvertedValue("seat-count");
        if( fastCardCount +1 > 4){
            alert( "Your limit 4 ticket only");
            return;
        }
         const totalSeatLeft = getConvertedValue("total-seat");
         if(totalSeatLeft -1 < 0 ){
            alert("Out of order")
            return;
         }


        //Seat Left
        const totalSeat = getConvertedValue("total-seat");
        document.getElementById("total-seat").innerText= totalSeat -1 ;

        const cartCount = getConvertedValue("seat-count");
        document.getElementById("seat-count").innerText= cartCount +1;


        const className = ("Business");
        const selectedContainer = document.getElementById ("table-container");
        const tr = document.createElement("tr");

        const td = document.createElement("td")
        td.innerText = seatName;
        const td2 = document.createElement("td")
        td2.innerText= className;
        const td3 = document.createElement("td")
        td3.innerText= seatPrice;
        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3) 
        selectedContainer.appendChild(tr);
        


        updateTotalPrice(seatPrice);
        updateGrandTotal();
        
        
    } );

    
}

function updateGrandTotal(status){
    const totalPrice = getConvertedValue("total-price");

    if(status== undefined){
    
        document.getElementById("grandTotal").innerText = totalPrice;
        
    }
    else{
        const couponCode = document.getElementById("coupon-code").value;
        if(couponCode=="NEW15"){
            const discountedPrice = totalPrice * 0.85;
            
            document.getElementById("grandTotal").innerText = totalPrice - discountedPrice;
        }
        else{
            alert("Please enter valid coupon code")
        }
    }
    
}




function updateTotalPrice(value){
    
    const totalPrice = getConvertedValue("total-price");
    const sum = totalPrice + parseInt(value);
    document.getElementById("total-price").innerText = sum;
    
    }


function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    convertedPrice = parseInt(price);
    return convertedPrice;
}




