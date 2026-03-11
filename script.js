body{
margin:0;
font-family:Arial, Helvetica, sans-serif;
color:#111;
background:#f5f7f6;
line-height:1.6;
}

.hero{
background:url("https://images.unsplash.com/photo-1558611848-73f7eb4001a1") center/cover;
height:100vh;
position:relative;
}

.overlay{
background:rgba(0,0,0,0.65);
height:100%;
display:flex;
align-items:center;
justify-content:center;
}

.hero-content{
max-width:700px;
color:white;
text-align:center;
padding:20px;
}

.hero h1{
font-size:38px;
margin-bottom:20px;
}

.btn{
background:#22c55e;
color:white;
padding:14px 28px;
text-decoration:none;
border-radius:6px;
display:inline-block;
margin-top:20px;
font-weight:bold;
}

.section{
padding:80px 20px;
max-width:900px;
margin:auto;
text-align:center;
}

.light{
background:white;
}

.list{
list-style:none;
padding:0;
margin-top:30px;
}

.list li{
margin-bottom:10px;
}

.pricing{
background:white;
padding:80px 20px;
text-align:center;
}

.plans{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
max-width:1000px;
margin:auto;
}

.plan{
background:#f7f7f7;
padding:30px;
border-radius:10px;
box-shadow:0 5px 20px rgba(0,0,0,0.1);
transition:transform .3s;
}

.plan:hover{
transform:translateY(-10px);
}

.highlight{
border:3px solid #22c55e;
}

.price{
color:#22c55e;
font-size:22px;
font-weight:bold;
}

.gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:15px;
margin-top:30px;
}

.gallery img{
width:100%;
border-radius:10px;
}

.cta{
background:#0f172a;
color:white;
text-align:center;
padding:100px 20px;
}

.email{
margin-top:15px;
font-size:14px;
}
