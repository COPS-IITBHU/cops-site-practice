<template>
<div>
    <h1 class="heading">Stats for CSOC'19</h1>
    <div class="cards">
   <div class="card">
        <i><img class="image" src="..\assets\reach.jpg"></i>
        <div class="figure">7K+</div>
        <p><a>Reach</a> | <b>1000+ </b> Likes and Share on Fb page</p>
    </div>

    <div class="card">
        <i><img class="image" src="..\assets\bug1.jpg" ></i>
        <div class="figure" data-target="10">110</div>
        <p>Students participated in Dev and ML.</p>
    </div>

    <div class="card">
        <i><img class="image" src="..\assets\pr.png" ></i>
        <div class="figure" data-target="80">80</div>
        <p>Pull Requests were made.</p>
    </div>

     <div class="card">
        <i><img class="image" src="..\assets\fork.png" ></i>
        <div class="figure" data-target="80">197</div>
        <p>Forks of repo were made.</p>
    </div>

    <div class="card">
        <i><img class="image" src="..\assets\repo.png" ></i>
        <div class=" figure" data-target="198">198</div>
        <p>Repositories were made.</p>
    </div>

    <div class="card">
        <i><img class="image" src="..\assets\tag2.jpg"></i>
        <div class="figure" data-target="200">200+</div>
        <p>Students took part in the CP Contest.</p>
    </div>

 </div>
</div>
</template>

<script>
export default {

 }
</script>

<style scoped>
.cards{
    display: flex;
    justify-content: right;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0cm;
    padding: 0px;
    background-color: rgba(43, 83, 194, 0.835);
    width: 39cm;
    height: 8cm;
    border-radius: 1cm;


 }
 .card {
    display: grid;
    width: 200px;
    height: 200px;
    border-radius: 18px;
    background: white;
    box-shadow: 5px 5px 15px rgba(155, 167, 200, 0.9);
    font-family: roboto;
    text-align: center;
    transition: 0.5s ease;
    cursor: pointer;
    margin:30px;
    margin-top: 50px;
   }
  .card p{
      padding: 2px;
      margin: 7px;
      font-size:17px;
      color: rgb(5, 15, 105);
    }
    .card a{
        font-size:18px;
    }
    .card i{


    }
    .card b{
        font-size:15px;
    }
    .figure {
        color: rgb(12, 39, 156);
        text-align: center;
        font-size:50px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        padding-top:0px;


    }
    .heading{
        margin-left: 6cm;
        margin-top: 2cm;
        font-size: 60px;
        margin-bottom: 0cm;
        padding-bottom: 0cm;
    }
    .image{
        height: 70px;
        width: 70px;
        margin-top: 10px;
        padding: 0cm;
    }
    .card:hover {
    transform: scale(1.15);
    box-shadow: 5px 5px 15px rgba(1, 238, 246, 0.6);
    }
</style>