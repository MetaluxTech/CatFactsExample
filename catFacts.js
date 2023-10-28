// Getting catFacts
async function getFacts(){
    try{
        const responce =await fetch("https://catfact.ninja/fact");
        
        if(!responce.ok){
            throw new Error("Faild to tech that API")
        }{
            const data =await responce.json();
            return data;
        }
    }
    catch (error){
    console.error("there is some error ");
    throw error;
    }
}
// Getting 10 CatFacts
async function fetchFacts(){
    const calFcats=[];
    for(let i=0;i<10;i++){
        try{
            const FactData=await getFacts();
            calFcats.push(FactData);
        }catch (error){
            console.error("There is some erroe happen bla bla" ,error);
        }
     

    }
    return calFcats;
}
function sortFacts(facts){
    return facts.slice().sort((a,b)=>a.length - b.length);
}
async function main(){
    try{
    const catFacts = await fetchFacts();
    const sortedFacts=sortFacts(catFacts);
    sortedFacts.forEach((fact,index)=>{
        console.log(`Fact ${index+1}:length - ${fact.length}, catFact - ${fact.fact}`)
    });


    }catch(error){
        console.log(error);
    }
   

}



main();