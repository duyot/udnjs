 function get_rule_result(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if (false) {
                console.log("Rule has been calculated: " + true);
                resolve("<div>Proceed</div>");
            } else {
                console.log("Rule has been calculated: " + false);
                reject("<div>Cancel</div>");
            }

        }, 5000);

    });
}

 function generate_button(value) {
     console.log("generating Proceed button." + value);
 }

 async function proceed() {
     try{
         const ruleResult = await get_rule_result();
         generate_button(ruleResult);
     }catch (error){
         generate_button(error);
     } finally {
         console.log("Button has been generated");
     }

 }

 proceed();
