export const Steper=(Props)=>{
    var arr=[false, false, false]
    arr[Props.num]=true
    return<>
    {/* <div class="checkboxContainer"> */}
        <section class="checkboxsection" style={{position:'sticky'}}>
           
            <article class="checkboxarticle">
                <input class="inputcheckbox" type="radio" name="switch-pos" id="pos-0" checked={arr[0]} />
                <input class="inputcheckbox" type="radio" name="switch-pos" id="pos-1" checked={arr[1]} />
                <input class="inputcheckbox" type="radio" name="switch-pos" id="pos-2" checked={arr[2]} />
                {/* <input class="inputcheckbox" type="radio" name="switch-pos" id="pos-3"/> */}
                <div class="chart">

                    <div class="bar bar-30 white">
                    <h1 style={{fontSize:'30px'}}>סטאפר</h1>
                         {/* <h1 style={{position:"absolute",top:'-10%',left:'50%',color:"black", fontSize:'60px'}}></h1> */}
                        <div class="face top">
                            <div class="growing-bar"></div>
                        </div>
                        <div class="face side-0">
                            <div class="growing-bar"></div>
                        </div>
                        <div class="face floor">
                            <div class="growing-bar"></div>
                        </div>
                        <div class="face side-a"></div>
                        <div class="face side-b"></div>
                        <div class="face side-1">
                            <div class="growing-bar"></div>
                        </div>
                    </div>
                </div>
                {/* <p class="checkboxp">Try another position :)</p> */}
                <nav class="checkboxactions">
                    <input  type='button'class={arr[0]? 'active':"checkboxlabel"}  for="pos-0" value='בחר אזורים לטיפול'></input>
                    <input type='button' class={arr[1]? 'active':"checkboxlabel"} for="pos-1" value='בחר תאריך ושעה'></input>
                    <input type='button' class={arr[2]? 'active':"checkboxlabel"} for="pos-2" value='התור נקבע בהצלחה'></input>
                    {/* <label class="checkboxlabel" for="pos-3">Full</label> */}
                </nav>
            </article>
         </section >
    {/* </div>  */}
    </>
}