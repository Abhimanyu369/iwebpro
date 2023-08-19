import Header from '../components/NewPage/Header';
import Footer from '../components/NewPage/Footer';
import BackTop from '../components/NewPage/BackTop';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {BACKEND_COMMAN_URL} from "../Api";

const StartHire = () => {
const [techDropdown,settechDropdown] = useState(false)
const innerref = useRef(null)
    const routePath = useLocation();
    const [suc,setsuc] = useState('');
    const [techhireselect,settechhireselect] = useState([])
    const techhirelist = ["A# .NET","A# (Axiom)","A-0 System","A+","A++","ABAP","ABC","ABC ALGOL","ABLE","ABSET","ABSYS","ACC","Accent","Ace DASL","ACL2","ACT-III","Action!","ActionScript","Ada","Adenine","Agda","Agilent VEE","Agora","AIMMS","Alef","ALF","ALGOL 58","ALGOL 60","ALGOL 68","ALGOL W","Alice","Alma-0","AmbientTalk","Amiga E","AMOS","AMPL","APL","App Inventor for Android's visual block language","AppleScript","Arc","ARexx","Argus","AspectJ","Assembly language","ATS","Ateji PX","AutoHotkey","Autocoder","AutoIt","AutoLISP / Visual LISP","Averest","AWK","Axum","B","Babbage","Bash","BASIC","bc","BCPL","BeanShell","Batch (Windows/Dos)","Bertrand","BETA","Bigwig","Bistro","BitC","BLISS","Blue","Bon","Boo","Boomerang","Bourne shell","bash","ksh","BREW","BPEL","C","C--","C++","C#","C/AL","Caché ObjectScript","C Shell","Caml","Candle","Cayenne","CDuce","Cecil","Cel","Cesil","Ceylon","CFEngine","CFML","Cg","Ch","Chapel","CHAIN","Charity","Charm","Chef","CHILL","CHIP-8","chomski","ChucK","CICS","Cilk","CL","Claire","Clarion","Clean","Clipper","CLIST","Clojure","CLU","CMS-2","COBOL","Cobra","CODE","CoffeeScript","Cola","ColdC","ColdFusion","COMAL","Combined Programming Language","COMIT","Common Intermediate Language","Common Lisp","COMPASS","Component Pascal","Constraint Handling Rules","Converge","Cool","Coq","Coral 66","Corn","CorVision","COWSEL","CPL","csh","CSP","Csound","CUDA","Curl","Curry","Cyclone","Cython","D","DASL","DASL","Dart","DataFlex","Datalog","DATATRIEVE","dBase","dc","DCL","Deesel","Delphi","DinkC","DIBOL","Dog","Draco","DRAKON","Dylan","DYNAMO","E","E#","Ease","Easy PL/I","Easy Programming Language","EASYTRIEVE PLUS","ECMAScript","Edinburgh IMP","EGL","Eiffel","ELAN","Elixir","Elm","Emacs Lisp","Emerald","Epigram","EPL","Erlang","es","Escapade","Escher","ESPOL","Esterel","Etoys","Euclid","Euler","Euphoria","EusLisp Robot Programming Language","CMS EXEC","EXEC 2","Executable UML","F","F#","Factor","Falcon","Fancy","Fantom","FAUST","Felix","Ferite","FFP","Fjölnir","FL","Flavors","Flex","FLOW-MATIC","FOCAL","FOCUS","FOIL","FORMAC","@Formula","Forth","Fortran","Fortress","FoxBase","FoxPro","FP","FPr","Franz Lisp","Frege","F-Script","FSProg","G","Google Apps Script","Game Maker Language","GameMonkey Script","GAMS","GAP","G-code","Genie","GDL","Gibiane","GJ","GEORGE","GLSL","GNU E","GM","Go","Go!","GOAL","Gödel","Godiva","GOM (Good Old Mad)","Goo","Gosu","GOTRAN","GPSS","GraphTalk","GRASS","Groovy","Hack (programming language)","HAL/S","Hamilton C shell","Harbour","Hartmann pipelines","Haskell","Haxe","High Level Assembly","HLSL","Hop","Hope","Hugo","Hume","HyperTalk","IBM Basic assembly language","IBM HAScript","IBM Informix-4GL","IBM RPG","ICI","Icon","Id","IDL","Idris","IMP","Inform","Io","Ioke","IPL","IPTSCRAE","ISLISP","ISPF","ISWIM","J","J#","J++","JADE","Jako","JAL","Janus","JASS","Java","JavaScript","JCL","JEAN","Join Java","JOSS","Joule","JOVIAL","Joy","JScript","JScript .NET","JavaFX Script","Julia","Jython","K","Kaleidoscope","Karel","Karel++","KEE","Kixtart","KIF","Kojo","Kotlin","KRC","KRL","KUKA","KRYPTON","ksh","L","L# .NET","LabVIEW","Ladder","Lagoona","LANSA","Lasso","LaTeX","Lava","LC-3","Leda","Legoscript","LIL","LilyPond","Limbo","Limnor","LINC","Lingo","Linoleum","LIS","LISA","Lisaac","Lisp","Lite-C","Lithe","Little b","Logo","Logtalk","LPC","LSE","LSL","LiveCode","LiveScript","Lua","Lucid","Lustre","LYaPAS","Lynx","M2001","M4","Machine code","MAD","MAD/I","Magik","Magma","make","Maple","MAPPER","MARK-IV","Mary","MASM Microsoft Assembly x86","Mathematica","MATLAB","Maxima","Macsyma","Max","MaxScript","Maya (MEL)","MDL","Mercury","Mesa","Metacard","Metafont","MetaL","Microcode","MicroScript","MIIS","MillScript","MIMIC","Mirah","Miranda","MIVA Script","ML","Moby","Model 204","Modelica","Modula","Modula-2","Modula-3","Mohol","MOO","Mortran","Mouse","MPD","CIL","MSL","MUMPS","NASM","NATURAL","Napier88","Neko","Nemerle","nesC","NESL","Net.Data","NetLogo","NetRexx","NewLISP","NEWP","Newspeak","NewtonScript","NGL","Nial","Nice","Nickle","Nim","NPL","Not eXactly C","Not Quite C","NSIS","Nu","NWScript","NXT-G","o:XML","Oak","Oberon","Obix","OBJ2","Object Lisp","ObjectLOGO","Object REXX","Object Pascal","Objective-C","Objective-J","Obliq","Obol","OCaml","occam","occam-π","Octave","OmniMark","Onyx","Opa","Opal","OpenCL","OpenEdge ABL","OPL","OPS5","OptimJ","Orc","ORCA/Modula-2","Oriel","Orwell","Oxygene","Oz","P#","ParaSail (programming language)","PARI/GP","Pascal","Pawn","PCASTL","PCF","PEARL","PeopleCode","Perl","PDL","PHP","Phrogram","Pico","Picolisp","Pict","Pike","PIKT","PILOT","Pipelines","Pizza","PL-11","PL/0","PL/B","PL/C","PL/I","PL/M","PL/P","PL/SQL","PL360","PLANC","Plankalkül","Planner","PLEX","PLEXIL","Plus","POP-11","PostScript","PortablE","Powerhouse","PowerBuilder","PowerShell","PPL","Processing","Processing.js","Prograph","PROIV","Prolog","PROMAL","Promela","PROSE modeling language","PROTEL","ProvideX","Pro*C","Pure","Python","Q (equational programming language)","Q (programming language from Kx Systems)","Qalb","QtScript","QuakeC","QPL","R","R++","Racket","RAPID","Rapira","Ratfiv","Ratfor","rc","REBOL","Red","Redcode","REFAL","Reia","Revolution","rex","REXX","Rlab","RobotC","ROOP","RPG","RPL","RSL","RTL/2","Ruby","RuneScript","Rust","S","S2","S3","S-Lang","S-PLUS","SA-C","SabreTalk","SAIL","SALSA","SAM76","SAS","SASL","Sather","Sawzall","SBL","Scala","Scheme","Scilab","Scratch","Script.NET","Sed","Seed7","Self","SenseTalk","SequenceL","SETL","Shift Script","SIMPOL","SIGNAL","SiMPLE","SIMSCRIPT","Simula","Simulink","SISAL","SLIP","SMALL","Smalltalk","Small Basic","SML","Snap!","SNOBOL","SPITBOL","Snowball","SOL","Span","SPARK","Speedcode","SPIN","SP/k","SPS","Squeak","Squirrel","SR","S/SL","Stackless Python","Starlogo","Strand","Stata","Stateflow","Subtext","SuperCollider","SuperTalk","Swift (Apple programming language)","Swift (parallel scripting language)","SYMPL","SyncCharts","SystemVerilog","T","TACL","TACPOL","TADS","TAL","Tcl","Tea","TECO","TELCOMP","TeX","TEX","TIE","Timber","TMG","Tom","TOM","Topspeed","TPU","Trac","TTM","T-SQL","TTCN","Turing","TUTOR","TXL","TypeScript","Turbo C++","Ubercode","UCSD Pascal","Umple","Unicon","Uniface","UNITY","Unix shell","UnrealScript","Vala","VBA","VBScript","Verilog","VHDL","Visual Basic","Visual Basic .NET","Visual DataFlex","Visual DialogScript","Visual Fortran","Visual FoxPro","Visual J++","Visual J#","Visual Objects","Visual Prolog","VSXu","Vvvv","WATFIV, WATFOR","WebDNA","WebQL","Windows PowerShell","Winbatch","Wolfram","Wyvern","X++","X#","X10","XBL","XC","XMOS architecture","xHarbour","XL","Xojo","XOTcl","XPL","XPL0","XQuery","XSB","XSLT","XPath","Xtend","Yorick","YQL","Z notation","Zeno","ZOPL","ZPL"]


    const [err,seterr] = useState('');
    const [data, setData] = useState(
        {
          company_name: '',
          email : '',
          phone : '',
          desc : '',
          requirement : '',
          tech : '',
          time : '',
          time_type : ''
        }
    );

    const handleSubmit = (e) => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      if(!data.company_name || data.company_name === ''){
        e.preventDefault(); 
        seterr("Company Name Required.");
        setsuc('');
        document.getElementById('company_name').focus();
        return false;
      }
      else if(!data.email || data.email === ''){
        e.preventDefault(); 
        seterr("Email Required.");
        setsuc('');
        document.getElementById('email').focus();
        return false;
      }
      if(!regex.test(data.email)){
        e.preventDefault();
        seterr("Invalid Email.");
        setsuc('');
        document.getElementById('email').focus();
        return false;
      }
      else if(!data.phone || data.phone === ''){
        e.preventDefault(); 
        seterr("Phone No. Required.");
        setsuc('');
        document.getElementById('phone').focus();
        return false;
      }
      if(data.phone.length !== 10){
        e.preventDefault();
        seterr("10 Character Required In Phone No.");
        setsuc('');
        document.getElementById('phone').focus();
        return false;
      }
      else if(!techhireselect || techhireselect === ''){
        e.preventDefault(); 
        seterr("Technology Required.");
        setsuc('');
        document.getElementById('tech').focus();
        return false;
      }
      else if(!data.time_type || data.time_type === ''){
        e.preventDefault(); 
        seterr("Time Type Required.");
        setsuc('');
        document.getElementById('time_type').focus();
        return false;
      }
      else if(!data.desc || data.desc === ''){
        e.preventDefault(); 
        seterr("Description Required.");
        setsuc('');
        document.getElementById('desc').focus();
        return false;
      }
      else if(!data.requirement || data.requirement === ''){
        e.preventDefault(); 
        seterr("Requirement Required.");
        setsuc('');
        document.getElementById('requirement').focus();
        return false;
      }
      else if(!data.time || data.time === ''){
        e.preventDefault(); 
        seterr("Time Required.");
        setsuc('');
        document.getElementById('time').focus();
        return false;
      }
      else{
        e.preventDefault();
        data.tech = techhireselect;
        axios.post(BACKEND_COMMAN_URL+'/api/start_hire', data)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
        setData({
          company_name: '',
          email : '', 
          phone : '',
          desc : '',
          requirement : '',
          tech : '',
          time : '',
          time_type : ''
        });
        seterr('');
        setsuc("Form Submitted.");
      }
    }

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    const handleselect = (e)=>{
      const {name,checked,value} = e.target;
      if(name === value){
        if(checked){
            settechhireselect((prev)=>([...prev,value]))
      }else {
        const filterdata = techhireselect.filter((prev)=>prev!==value)
        settechhireselect(filterdata)
      }
            }
    }
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[routePath]);

      useEffect(() => {
        function handleClickOutside(event) {
          if (innerref.current && !innerref.current.contains(event.target)) {
           settechDropdown(false)
          }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, [innerref]);

  return (
    <>
      <Header />
      <div className="contact-area mb-5 pb-5" style={{marginTop:'150px'}}>
        <div className="container">
            <div className="contact-inner-1">
                <img className="top_image_bounce animate-img-1" src="assets/img/banner/2.png" alt="img" />
                <img className="top_image_bounce animate-img-2" src="assets/img/icon/26.png" alt="img" />
                <div className="row">
                    <div className="col-lg-8 wow animated fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <img className="w-100" src="assets/img/bg/4.png" alt="img" />
                    </div>
                    <div className="col-lg-4 wow animated fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <div className="section-title mb-0">
                            <h6 className="sub-title">GET IN TOUCH</h6>
                            <h2 className="title">Lorem <span>Ipsum</span> To Dummy</h2>
                            <p className="content">He undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum.</p>
                            {err ? <p className='error'>{err}</p> : ''}
                            {suc ? <p className='success'>{suc}</p> : ''}
                            <form className="mt-4" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <input onChange={handleChange} type="text" name="company_name" id='company_name' className="mb-4 form-control" value={data.company_name} placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <input onChange={handleChange} type="text" name="email" id='email' className="mb-4 form-control" value={data.email} placeholder="Email"/>  
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <input onChange={handleChange} type="number" name="phone" id='phone' className="mb-4 form-control" value={data.phone} placeholder="Phone No."/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" ref={innerref}> 
                                        <div className="single-input-inner style-border relaetivestarthire">
                                          <input type="text" name="tech" id='tech' onClick={()=>{settechDropdown(!techDropdown)}} readOnly className="mb-4 form-control" value={techhireselect?.join(',')} placeholder="Tech Stack"/>
                                        {techDropdown && techhirelist?.length > 0 && 
                                        <>
                                        <div className='dropdwon_class'>
                                          <ul className='starthirelist'>
                                           {
                                            techhirelist.map((data,index)=>{
                                              return (
                                                <li key={index}>
                                                  <input type='checkbox' name={data} checked={techhireselect?.includes(data)} id={data} value={data} onChange={(e)=>handleselect(e)}/>
                                                  <label htmlFor={data}>{data}</label>
                                                  </li>
                                              )
                                            })
                                           }
                                          </ul>
                                        </div>
                                        </>
                                        }
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <select className='form-control mb-4' name="time_type" id='time_type' value={data.time_type} onChange={handleChange}>
                                            <option value="">-- Select Time Type --</option>
                                            <option value='Full Time'>Full Time</option>
                                            <option value='Part Time'>Part Time</option>
                                            <option value='Hourly Basis'>Hourly Basis</option>
                                          </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <input onChange={handleChange} type="text" name="desc" id='desc' className="mb-4 form-control" value={data.desc} placeholder="Short Description"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <input onChange={handleChange} type="text" name="requirement" id='requirement' className="mb-4 form-control" value={data.requirement} placeholder="Requirement"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <input onChange={handleChange} type="number" name="time" id='time' className="mb-4 form-control" value={data.time} placeholder="Period Of Time"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                      <button type="submit" className="mx-auto btn btn-base page-scroll px-sm-5 wow animated fadeInUp d-block" data-wow-delay='0.3s' style={{borderRadius: '5px'}}>Submit Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
      <BackTop />
    </>
  )
}

export default StartHire;