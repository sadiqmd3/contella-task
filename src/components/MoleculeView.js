const MoleculeView =()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MoleculeView</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            select MoleculeView
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://3dmol.org/viewer.html?pdb=1BRS&select=chain:A&style=stick:radius~0.1;cross&select=chain:A&surface=opacity:0.8;colorscheme:whiteCarbon&select=chain:B&style=cartoon;line&select=resi:19,23,26;chain:B&style=stick&select=resi:19,23,26;chain:B&labelres=backgroundOpacity:0.8;fontSize:14
">protein structure of Ribonuclease</a></li>
            <li><a class="dropdown-item" href="https://3dmol.org/viewer.html?pdb=1TDP&select=chain:A&style=stick:radius~0.1;cross&select=chain:A&surface=opacity:0.8;colorscheme:whiteCarbon&select=chain:B&style=cartoon;line&select=resi:19,23,26;chain:B&style=stick&select=resi:19,23,26;chain:B&labelres=backgroundOpacity:0.8;fontSize:14
">protein structure of Thymidylate kinase</a></li>
            <li><a class="dropdown-item" href="https://3dmol.org/viewer.html?pdb=1DNA&select=chain:A&style=stick:radius~0.1;cross&select=chain:A&surface=opacity:0.8;colorscheme:whiteCarbon&select=chain:B&style=cartoon;line&select=resi:19,23,26;chain:B&style=stick&select=resi:19,23,26;chain:B&labelres=backgroundOpacity:0.8;fontSize:14
">DNA</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="d-flex justify-content-center">
<img src="https://media.licdn.com/dms/image/D560BAQFRm7bD56RkJQ/company-logo_200_200/0/1684149958929?e=2147483647&v=beta&t=GAm5mHsQ8E2K_bw7DsfU_kGtUayxFW_fOUswrl125mU" alt="Bootstrap" height="500px" ></img>
</div>
        </>
    )
}

export default MoleculeView