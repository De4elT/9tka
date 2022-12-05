function komputerVsKomputer(){
    const PLAYER1 = 'fa-mountain';
    const PLAYER2 = 'fa-mountain';
    const PLAYER3 = 'fa-dragon';
    const PLAYER4 = 'fa-spider';
    let round = 1;
    let counter = 0;
    let xscore = 0;
    let oscore = 0;
    let result = -100;
    let oldresult=result;
    let turn=0;
    let turn1=0;
	let cr=1;
	let deep=parseInt(document.getElementById("deep").value);
    let grantrow;
	let grantcolumn;
    
    const board = [
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
    ];
    
	var xboard = new Array ();
    
    for(let i=0;i<deep;i++)
	{
		 xboard[i] = [
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
		
    ];

	}
    
    const boxes = [...document.querySelectorAll('.box')];
    boxes.forEach(box => box.addEventListener('click', pick));
        
      
             boxes.forEach(function(box) {
        if(round%2==1){
            box.click()
        }
      });
	
	 function grantresetsim (){
		 
		 for(let k=0;k<deep;k++)
		 {
		    for (let i = 0; i < 11; i++) 
	{
		
    for (let j = 0; j < 11; j++) 
	{
		if (k>0)
		{
		xboard[k][i][j] ="";
		}
		else
		{
		
		xboard[0][i][j] = board[i][j];
		}
			
		
    }
	}
	}
	}
	
	
	
	
	function resetsim(){
		
		    for (let i = 0; i < 11; i++) 
	{
		
    for (let j = 0; j < 11; j++) 
	{
		if (cr>0)
		{
		xboard[cr][i][j] = xboard[cr-1][i][j];
		}
		else
		{
		
		xboard[0][i][j] = board[i][j];
		}
			
		
    }
	}
		
	}
	
							
    
    
    function botmove(){
		
		if (82-round<deep)
		{
			deep=82-round;
		}
	
				ccpu();
	            cpu();
            console.log("bestrow");
            console.log(bestrow);
            console.log("bestcolumn");
            console.log(bestcolumn);
			console.log(board[bestrow][bestcolumn]);
				grantresetsim ();
			
							    let help;
								let text;
	
	
	
                   //lewo
                if ((bestrow == 1 || bestrow == 2 || bestrow == 3 || bestrow == 4 || bestrow == 5 || bestrow == 6 || bestrow == 7 || bestrow == 8 || bestrow == 9) && (bestcolumn == 0)) {
    
	     var bot1 = document.getElementById((bestrow * 10) + bestcolumn);
	                                bot1.classList.remove('fa-spider');

                    let j = 0;
    console.log(bestrow);				
    console.log(board[bestrow][0]);
                    if (board[bestrow][0] !== '') {
                        for (let i = 1; j < 1; i++) {
                            if (board[bestrow][i] == '') {
    
                                board[bestrow][i] = board[bestrow][i - 1];
                                board[bestrow][i - 1] = '';
                            }
                            else {
    
                                j = 1;
								bot1.classList.remove('fa-spider');
								board[bestrow][0]='';
                                if (board[bestrow][bestcolumn] != "") {
                                    round++;
                                    return;
                                }
                                var myfield = document.getElementById((bestrow * 10) + i - 1);
                                console.log(myfield.dataset);
                                myfield.classList.add('fa-spider');
    
	     var bot1 = document.getElementById((bestrow * 10) + bestcolumn);
	                                bot1.classList.remove('fa-spider');
    
    
                            }
                        }
                        round++;
                    }
    
    
    
                }
    
    
    
                //gora
                if ((bestcolumn == 1 || bestcolumn == 2 || bestcolumn == 3 || bestcolumn == 4 || bestcolumn == 5 || bestcolumn == 6 || bestcolumn == 7 || bestcolumn == 8 || bestcolumn == 9) && (bestrow == 0)) {
    
						
								help = bestrow;
								text = help.toString();
	


                var bot1 = document.getElementById(text + bestcolumn);
				                               bot1.classList.remove('fa-spider');
											   
                    let j = 0;
    
                    if ((board[0][bestcolumn] !== '') && (board[0][bestcolumn] == 'fa-spider')) {
                        for (let i = 1; j < 1; i++) {
							if(board[i][bestcolumn] == 'fa-spider'){
							}
                            if (board[i][bestcolumn] == '') {
    
                                board[i][bestcolumn] = board[i - 1][bestcolumn];
                                board[i - 1][bestcolumn] = '';
                            }
                            else {
                                j = 1;
								
                                bot1.classList.remove('fa-spider');
								board[0][bestcolumn]='';
                                if (board[bestrow][bestcolumn] != "") {
                                    round++;
                                    return;
                                }
								help = i-1;
								text = help.toString();
                                var myfield = document.getElementById((text) + bestcolumn);
                                console.log(myfield.dataset);
                                myfield.classList.add('fa-spider');
								
								
								help = bestrow;
								text = help.toString();
	


                var bot1 = document.getElementById(text + bestcolumn);
				                               bot1.classList.remove('fa-spider');
                            }
                        }
                        round++;
                    }
    
    
    
                }
				
				            //prawo 
    
                if ((bestrow == 1 || bestrow == 2 || bestrow == 3 || bestrow == 4 || bestrow == 5 || bestrow == 6 || bestrow == 7 || bestrow == 8 || bestrow == 9) && (bestcolumn == 10)) {
    
	                   	
													help = bestrow;
								text = help.toString();
	
     var bot1= document.getElementById((text) + bestcolumn);
	 
	                                bot1.classList.remove('fa-spider');            
			
                    let j = 0;
    
                    if ((board[bestrow][10] !== '') && (board[bestrow][10] == 'fa-spider')) {
                        for (let i = 9; j < 1; i--) {
                            if (board[bestrow][i] == '') {
    
                                board[bestrow][i] = board[bestrow][i + 1];
                                board[bestrow][i + 1] = '';
                            }
                            else {
                                j = 1;
    
                                bot1.classList.remove('fa-spider');
								board[bestrow][10]='';
                                if (board[bestrow][bestcolumn] != "") {
                                    round++;
                                    return;
                                }
								help = bestrow;
								text = help.toString();
                                var myfield = document.getElementById((text) + (i + 1));							
                                myfield.classList.add('fa-spider');
								
													help = bestrow;
								text = help.toString();
	
     var bot1= document.getElementById((text) + bestcolumn);
	 
	                                bot1.classList.remove('fa-spider');
                            }
                        }
                        round++;
                    }
				}
    
    
    
                
    
                //dol 
    
                if ((bestcolumn == 1 || bestcolumn == 2 || bestcolumn == 3 || bestcolumn == 4 || bestcolumn == 5 || bestcolumn == 6 || bestcolumn == 7 || bestcolumn == 8 || bestcolumn == 9) && (bestrow == 10)) {
    
							
    
                    let j = 0;
    	help = bestrow;
								text = help.toString();
    var bot1 = document.getElementById((text) + bestcolumn);
	                               bot1.classList.remove('fa-spider');
                    if ((board[10][bestcolumn] !== '') && (board[10][bestcolumn] == 'fa-spider')) {
                        for (let i = 9; j < 1; i--) {
                            if (board[i][bestcolumn] == '') {
    
                                board[i][bestcolumn] = board[i + 1][bestcolumn];
                                board[i + 1][bestcolumn] = '';
                            }
                            else {
      board[i + 1][bestcolumn] = '';
                                j = 1;
    
                                bot1.classList.remove('fa-spider');
																board[10][bestcolumn]='';
                                if (board[bestrow][bestcolumn] != "") {
                                    round++
                                    return;
                                }
								help = i+1;
								text = help.toString();
                                var myfield = document.getElementById((text) + bestcolumn);

                                myfield.classList.add('fa-spider');
								
									help = bestrow;
								text = help.toString();
    var bot1 = document.getElementById((text) + bestcolumn);
	                               bot1.classList.remove('fa-spider');
                            }
                        }
						                        round++;
                    }
    
    
    
                }
    
}
    function col1()
	{
		 for(let row=1; row<10; row++)
        {	
			if ((board[row][10]=='fa-dragon')&&(board[row][0]==''))
			{
				console.log(row);
				board[row][0]=='fa-spider'
				help = row;
				text = help.toString();
                var myfield = document.getElementById((text) + (0));							
                myfield.classList.add('fa-spider');
				isdone =1;
				round++;
				row=0;
				break;
			
			}
		}
	}
	
	
	function col2()
	{
			
		 for(let row=1; row<10; row++)
        {
			
			if ((board[row][0]=='fa-dragon')&&(board[row][10]==''))
			{
							console.log(row);
				board[row][10]=='fa-spider'
				board[row][10]=='fa-spider'
				help = row;
				text = help.toString();
                var myfield = document.getElementById((text) + (10));							
                myfield.classList.add('fa-spider');
				isdone =1;
				row=0;
				round++;
				break;
				
			}

		}
	
	}
    
        function cpuset()
		{

		
		//col1();
		
		//col2();
		
		
		 
	

				       boxes.forEach(function(box) {
        if(round%2==1){
            box.click()
        }
      });
		 
	}
	
	function ccpu()
	{
		cr=0;
		  bestrow=100;
        bestcolumn=100;
		
		
	}
	
	
	
    
    function cpu()
    {

	
		    
		
	
		
		if(cr%2==0)
{
		
        
            let xpoints = 0;
            let opoints = 0;
    
	
	
	
     resetsim();
        
  
		
        for(let row=1; row<10; row++)
        {	

    
    
                    let j = 0;
    
                
                         if ((xboard[cr][row][0] !== '') && (xboard[cr][row][0] == 'fa-spider')) {
							 	console.log("01");
                        for (let i = 1; j < 1; i++) {
							
                            if (xboard[cr][row][i] == '') {
							
	
							
                                xboard[cr][row][i] = xboard[cr][row][i - 1];
                                xboard[cr][row][i - 1] = '';

                            }
                            else {
								
								if(cr==0)
								{
									grantrow=row;
									grantcolumn=0;
								}

								if (cr==deep-1)
								{
                                        checkcost();
    
                                        
                                    if (result>oldresult)
                                    {
                                            oldresult=result;
                                            bestrow=grantrow;
                                            bestcolumn=grantcolumn;
                                                                          
                                    }
    
                                j = 1;
                                
                            }
																else
							{
								cr++;
																console.log("Wysyłam w przyszłość1!");
								cpu();
																resetsim();
								cr--;
								j = 1;
								
								
							}
							
    
							} 
                                }
                                
                                    }
                                     
    }
    
    
   
    
    //////////////////////////////
    
    
     resetsim();
    
        for(let column=1; column<10; column++)
        {	
    
    
                    let j = 0;
    
                
           if ((xboard[cr][0][column] !== '') && (xboard[cr][0][column] == 'fa-spider')) {
			   	console.log("02");
                        for (let i = 1; j < 1; i++) {
                            if (xboard[cr][i][column] == '') {
    
                                xboard[cr][i][column] = xboard[cr][i - 1][column];
                                xboard[cr][i - 1][column] = '';
                            }
                            else {
								if(cr==0)
								{
									grantcolumn=column;
									grantrow=0;
								}
								
								if (cr==deep-1)
								{
                                checkcost();
                                    if (result>oldresult)
                                    {
    
                                            oldresult=result;
                                            bestrow=grantrow;
                                            bestcolumn=grantcolumn;
											
                                            
                                    }
    
                                j = 1;
                                
                            }
																	else
							{
								cr++;
																console.log("Wysyłam w przyszłość2!");
								cpu();
																resetsim();
								cr--;

								j = 1;
								
								
							}
							}
                                    
                                    
                                }
                                
                                    }
                                     
    }
         ///////////
    
     resetsim();
        
    for(let row=1; row<10; row++)
        {	
    

    
    
    
                    let j = 0;
    
        if ((xboard[cr][row][10] !== '') && (xboard[cr][row][10] == 'fa-spider')) {
				console.log("03");

                        for (let i = 9; j < 1; i--) {
                            if (xboard[cr][row][i] == '') {
    
                                xboard[cr][row][i] = xboard[cr][row][i + 1];
                                xboard[cr][row][i + 1] = '';
                            }
                            else {
								if(cr==0)
								{
									grantrow=row;
									grantcolumn=10;
								}
								if (cr==deep-1)
								{
                                    checkcost();
                                    if (result>oldresult)
                                    {
    
                                            oldresult=result;
                                            bestcolumn=grantcolumn;
											bestrow=grantrow;
                                            
                                    }
    
                                j = 1;
								}
										else
							{
								cr++;
																console.log("Wysyłam w przyszłość3!");
								cpu();
																resetsim();
								cr--;

								j = 1;
								
								
							}								
                            }
                                    
                                    
                                    
                                }
                                
                                    }
                                     
    }
        
        ////////
		
		
        
        resetsim();
    
    for(let column=1; column<10; column++)
        {	
  
                      let j = 0;
                
           if ((xboard[cr][10][column] !== '') && (xboard[cr][10][column] == 'fa-spider')) {
			   	console.log("04");
                        for (let i = 9; j < 1; i--) {
                            if (xboard[cr][i][column] == '') {
    
                                xboard[cr][i][column] = xboard[cr][i + 1][column];
                                xboard[cr][i + 1][column] = '';

                            }
                            else {
								if(cr==0)
								{
									grantcolumn=column;
									grantrow=10;
								}
								if (cr==deep-1)
								{
                                    checkcost();
                                    if (result>oldresult)
                                    {
    
                                            oldresult=result;
                                            bestrow=grantrow;
                                            bestcolumn=grantcolumn;
                                    }
    
                                j = 1;
								}
										else
							{
								cr++;
								console.log("Wysyłam w przyszłość4!");
								cpu();
																resetsim();
								cr--;

								j = 1;
								
								
							}								
                            }
                                
                                    
                                    
                                }
                                
                                    }
                                     
    }
    
    
    
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	//////////////////////////////////////////
	
	
	
	
	
	
	
	
	
	
	
	
			if(cr%2==1)
{
		
            let xpoints = 0;
            let opoints = 0;
    
	
	
	
     resetsim();
        
		
        for(let row=1; row<10; row++)
        {	

    
    
                    let j = 0;
    
                
                         if ((xboard[cr][row][0] !== '') && (xboard[cr][row][0] == 'fa-dragon')) {
							 	console.log("11");
                        for (let i = 1; j < 1; i++) {
							
                            if (xboard[cr][row][i] == '') {
							
	
							
                                xboard[cr][row][i] = xboard[cr][row][i - 1];
                                xboard[cr][row][i - 1] = '';

                            }
                            else {
								

                                 if (cr==deep-1)
								 {									 
                                        checkcost();
    
                                        
                                    if (result>oldresult)
                                    {
                                            oldresult=result;
                                            bestrow=grantrow;
                                            bestcolumn=grantcolumn;
                                                                          
                                    }
    
                                j = 1;
								 }
								else
							{
								cr++;
								console.log("Wysyłam w przyszłość5!");
								cpu();
																resetsim();
								cr--;

								j = 1;
								
								
							}		
                            }
    
                                    
                                }
                                
                                    }
                                     
    }
    
    
   
    
    //////////////////////////////
    
    
     resetsim();
    
        for(let column=1; column<10; column++)
        {	
    
    
                    let j = 0;
    
                
           if ((xboard[cr][0][column] !== '') && (xboard[cr][0][column] == 'fa-dragon')) {
			   	console.log("12");
                        for (let i = 1; j < 1; i++) {
                            if (xboard[cr][i][column] == '') {
    
                                xboard[cr][i][column] = xboard[cr][i - 1][column];
                                xboard[cr][i - 1][column] = '';
                            }
                            else {

								if (cr==deep-1)
								{
									
                                checkcost();
                                    if (result>oldresult)
                                    {
    
                                            oldresult=result;
                                            bestrow=grantrow;
                                            bestcolumn=grantcolumn;
                                            
                                    }
    
                                j = 1;
                                
								}
									else
							{
								cr++;
								console.log("Wysyłam w przyszłość6!");
								cpu();
																resetsim();
								cr--;

								j = 1;
								
								
							}	
                            }
                        
                                    
                                    
                                }
                                
                                    }
                                     
    }
         ///////////
    
     resetsim();
        
    for(let row=1; row<10; row++)
        {	
    

    
    
    
                    let j = 0;
    
        if ((xboard[cr][row][10] !== '') && (xboard[cr][row][10] == 'fa-dragon')) {
				console.log("13");

                        for (let i = 9; j < 1; i--) {
                            if (xboard[cr][row][i] == '') {
    
                                xboard[cr][row][i] = xboard[cr][row][i + 1];
                                xboard[cr][row][i + 1] = '';
                            }
                            else {

								if (cr==deep-1)
								{
									
                                    checkcost();
                                    if (result>oldresult)
                                    {
    
                                            oldresult=result;
                                            bestrow=grantrow;
                                            bestcolumn=grantcolumn;
                                            
                                    }
    
                                j = 1;
                                }
									else
							{
								cr++;
								console.log("Wysyłam w przyszłość7!");
								cpu();
																resetsim();
								cr--;

								j = 1;
								
								
							}	
                            }
                                    
                                    
                                    
                                }
                                
                                    }
                                     
    }
        
        ////////
		
		
        
        resetsim();
    
    for(let column=1; column<10; column++)
        {	
  
                      let j = 0;
                
           if ((xboard[cr][10][column] !== '') && (xboard[cr][10][column] == 'fa-dragon')) {
			   	console.log("14");
                        for (let i = 9; j < 1; i--) {
                            if (xboard[cr][i][column] == '') {
    
                                xboard[cr][i][column] = xboard[cr][i + 1][column];
                                xboard[cr][i + 1][column] = '';

                            }
                            else {

								if (cr==deep-1)
								{
									
                                    checkcost();
                                    if (result>oldresult)
                                    {
    
                                            oldresult=result;
                                            bestrow=grantrow;
                                            bestcolumn=grantcolumn;
                                           
                                    }
    
                                j = 1;
                                }
									else
							{
								cr++;
								console.log("Wysyłam w przyszłość8!");
								cpu();
																resetsim();
								cr--;

								j = 1;
								
								
							}	
                            }
                                
                                    
                                    
                                }
                                
                                    }
                                     
    }
    
    
    
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    }
        
                        
                        
                        
                        
                        
                        
                        
    
    
        
        function checkcost()					
        {
			
             let xpoints = 0;
             let opoints = 0;
				xscore=0;
				oscore=0;
            
    result =-100;
            for (let i = 1; i < 4; i++) {
    
                for (let j = 1; j < 4; j++) {
                    if (xboard[cr][i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (xboard[cr][i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
            if (xpoints > opoints) {
                xscore = xscore + 1;
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
            }
    
    
            //2
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 1; i < 4; i++) {
    
                for (let j = 4; j < 7; j++) {
                    if (xboard[cr][i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (xboard[cr][i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
            }
    
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 1; i < 4; i++) {
    
                for (let j = 7; j < 10; j++) {
                    if (xboard[cr][i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (xboard[cr][i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
            }
            
            //4
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 4; i < 7; i++) {
    
                for (let j = 1; j < 4; j++) {
                    if (xboard[cr][i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (xboard[cr][i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
            }
    
            //5
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 4; i < 7; i++) {
    
                for (let j = 4; j < 7; j++) {
                    if (xboard[cr][i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (xboard[cr][i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
            }
            
            //6
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 4; i < 7; i++) {
    
                for (let j = 7; j < 10; j++) {
                    if (xboard[cr][i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (xboard[cr][i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
            }
    
            //7
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 7; i < 10; i++) {
    
                for (let j = 1; j < 4; j++) {
                    if (xboard[cr][i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (xboard[cr][i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
            }
    
            //8
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 7; i < 10; i++) {
    
                for (let j = 4; j < 7; j++) {
                    if (xboard[cr][i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (xboard[cr][i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
            }
    
    
            //9
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 7; i < 10; i++) {
    
                for (let j = 7; j < 10; j++) {
    
                    if (xboard[cr][i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
    
                    }
                    if (xboard[cr][i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
            }
    
			result = oscore-xscore; 
			              xpoints = 0;
              opoints = 0;
			  xscore=0;
			  oscore=0;
    
          
    
    }
    
    
    
    
    function pick(event) {
        var { row, column } = event.target.dataset;
         turn = round % 2 === 0 ? PLAYER2 : PLAYER1;
         turn1 = round % 2 === 0 ? PLAYER3 : PLAYER4;
        var allowedmove=round;
        
       
    
    
    
        if (round < 10) {
            
    
    
    
            //1
    
            console.log(event.target.dataset);
    
            if ((row == 2 || row == 3) && (column == 2 || column == 3)) {
    
                if ((board[2][2] == '') && (board[2][3] == '') && (board[3][3] == '') && (board[3][2] == '')) {
                    event.target.classList.add(turn);
                    board[row][column] = turn;
                    textColor()
                    round++;
                }
            }
            //2
            if ((row == 2 || row == 3) && (column == 4 || column == 5 || column == 6)) {
    
                if ((board[3][4] == '') && (board[3][5] == '') && (board[3][6] == '') && (board[2][4] == '') && (board[2][5] == '') && (board[2][6] == '')) {
                    event.target.classList.add(turn);
                    board[row][column] = turn;
                    textColor()
                    round++;
                }
            }
            //3
            if ((row == 2 || row == 3) && (column == 7 || column == 8)) {
    
                if ((board[2][7] == '') && (board[2][8] == '') && (board[3][7] == '') && (board[3][8] == '')) {
                    event.target.classList.add(turn);
                    board[row][column] = turn;
                    textColor()
                    round++;
                }
            }
            //4
            if ((row == 4 || row == 5 || row == 6) && (column == 2 || column == 3)) {
    
                if ((board[4][2] == '') && (board[4][3] == '') && (board[5][2] == '') && (board[5][3] == '') && (board[6][2] == '') && (board[6][3] == '')) {
                    event.target.classList.add(turn);
                    board[row][column] = turn;
                    textColor()
                    round++;
                }
            }
            //5
            if ((row == 4 || row == 5 || row == 6) && (column == 4 || column == 5 || column == 6)) {
    
                if ((board[4][4] == '') && (board[4][5] == '') && (board[4][6] == '') && (board[5][4] == '') && (board[5][5] == '') && (board[5][6] == '') && (board[6][4] == '') && (board[6][5] == '') && (board[6][6] == '')) {
                    event.target.classList.add(turn);
                    board[row][column] = turn;
                    textColor()
                    round++;
                }
            }
            //6
            if ((row == 4 || row == 5 || row == 6) && (column == 7 || column == 8)) {
    
                if ((board[4][7] == '') && (board[4][8] == '') && (board[5][7] == '') && (board[5][8] == '') && (board[6][7] == '') && (board[6][8] == '')) {
                    event.target.classList.add(turn);
                    board[row][column] = turn;
                    textColor()
                    round++;
                }
            }
            //7
            if ((row == 7 || row == 8) && (column == 2 || column == 3)) {
    
                if ((board[7][2] == '') && (board[7][3] == '') && (board[8][2] == '') && (board[8][3] == '')) {
                    event.target.classList.add(turn);
                    board[row][column] = turn;
                    textColor()
                    round++;
                }
            }
            //8
            if ((row == 7 || row == 8) && (column == 4 || column == 5 || column == 6)) {
    
                if ((board[7][4] == '') && (board[7][5] == '') && (board[7][6] == '') && (board[8][4] == '') && (board[8][5] == '') && (board[8][6] == '')) {
                    event.target.classList.add(turn);
                    board[row][column] = turn;
                    textColor()
                    round++;
                }
            }
            //9
            if ((row == 7 || row == 8) && (column == 7 || column == 8)) {
    
                if ((board[7][7] == '') && (board[7][8] == '') && (board[8][7] == '') && (board[8][8] == '')) {
                    event.target.classList.add(turn);
                    board[row][column] = turn;
                    textColor()
                    round++;
                }
            }
    
    
        }
        else
            if (round >= 10 && round <= 45) {
                //gÃ³rna ramka
                if ((row == 0) && (column == 1 || column == 2 || column == 3 || column == 4 || column == 5 || column == 6 || column == 7 || column == 8 || column == 9)) {
                    if ((board[0][1] == '') || (board[0][2] == '') || (board[0][3] == '') || (board[0][4] == '') || (board[0][5] == '') || (board[0][6] == '') || (board[0][7] == '') || (board[0][8] == '') || (board[0][9] == '')) {
                        if (board[row][column] != "") return;
                        event.target.classList.add(turn1);
                        board[row][column] = turn1;
                        textColor()
                        round++;
                        console.log(round);
                    }
                }
    
                //lewa ramka
                if ((row == 1 || row == 2 || row == 3 || row == 4 || row == 5 || row == 6 || row == 7 || row == 8 || row == 9) && (column == 0)) {
                    if ((board[1][0] == '') || (board[2][0] == '') || (board[3][0] == '') || (board[4][0] == '') || (board[5][0] == '') || (board[6][0] == '') || (board[7][0] == '') || (board[8][0] == '') || (board[9][0] == '')) {
                        if (board[row][column] != "") return;
                        event.target.classList.add(turn1);
                        board[row][column] = turn1;
                        textColor()
                        round++;
                        console.log(round);
                    }
                }
                //prawa ramka
                if ((row == 1 || row == 2 || row == 3 || row == 4 || row == 5 || row == 6 || row == 7 || row == 8 || row == 9) && (column == 10)) {
    
                    if ((board[1][9] == '') || (board[2][9] == '') || (board[3][9] == '') || (board[4][9] == '') || (board[5][9] == '') || (board[6][9] == '') || (board[7][9] == '') || (board[8][9] == '') || (board[9][9] == '')) {
                        if (board[row][column] != "") return;
                        event.target.classList.add(turn1);
                        board[row][column] = turn1;
                        textColor()
                        round++;
                        console.log(round);
                    }
                }
                //dolna ramka
                if ((row == 10) && (column == 1 || column == 2 || column == 3 || column == 4 || column == 5 || column == 6 || column == 7 || column == 8 || column == 9)) {
    
                    if ((board[10][1] == '') || (board[10][2] == '') || (board[10][3] == '') || (board[10][4] == '') || (board[10][5] == '') || (board[10][6] == '') || (board[10][7] == '') || (board[10][8] == '') || (board[10][9] == '')) {
                        if (board[row][column] != "") return;
                        event.target.classList.add(turn1);
                        board[row][column] = turn1;
                        textColor()
                        round++;
                        console.log(round);
                    }
                }
    
    
    
    
            }
            else if (round > 45) {
                //lewo
                if ((row == 1 || row == 2 || row == 3 || row == 4 || row == 5 || row == 6 || row == 7 || row == 8 || row == 9) && (column == 0)) {
    
    
                    let j = 0;
    
                    if ((board[row][0] !== '') && (board[row][0] == turn1)) {
                        for (let i = 1; j < 1; i++) {
                            if (board[row][i] == '') {
    
                                board[row][i] = board[row][i - 1];
                                board[row][i - 1] = '';
                            }
                            else {
    
    
                                
                                event.target.classList.remove(turn1);
								board[row][0]='';
								j = 1;
                                if (board[row][column] != "") {
                                    textColor()
                                    round++
                                    return;
                                }

    							help = row;
								text = help.toString();
                                var myfield = document.getElementById((text) + (i - 1));							
                                myfield.classList.add(turn1);
								
								event.target.classList.remove(turn1);
    
                            }
                        }
                        textColor()
                        round++;
                    }
    
    
    
                }
    
                //prawo 
    
                if ((row == 1 || row == 2 || row == 3 || row == 4 || row == 5 || row == 6 || row == 7 || row == 8 || row == 9) && (column == 10)) {
    
    
                    let j = 0;
    
                    if ((board[row][10] !== '') && (board[row][10] == turn1)) {
                        for (let i = 9; j < 1; i--) {
                            if (board[row][i] == '') {
    
                                board[row][i] = board[row][i + 1];
                                board[row][i + 1] = '';
                            }
                            else {
								
                                event.target.classList.remove(turn1);
																	board[row][10]='';
                                j = 1;
    

                                if (board[row][column] != "") {
                                    textColor()
                                    round++
                                    return;
                                }
								
								help = row;
								text = help.toString();
                                var myfield = document.getElementById((text) + (i + 1));							
                                myfield.classList.add(turn1);
								
								event.target.classList.remove(turn1);
								
								
					
                            }
                        }
                        textColor()
                        round++;
                    }
    
    
    
                }
    
                //gora
                if ((column == 1 || column == 2 || column == 3 || column == 4 || column == 5 || column == 6 || column == 7 || column == 8 || column == 9) && (row == 0)) {
    
    
                    let j = 0;
    
                    if ((board[0][column] !== '') && (board[0][column] == turn1)) {
                        for (let i = 1; j < 1; i++) {
                            if (board[i][column] == '') {
    
                                board[i][column] = board[i - 1][column];
                                board[i - 1][column] = '';
                            }
                            else {
    
                               
    
                                event.target.classList.remove(turn1);
								board[0][column]='';
								 j = 1;
                                if (board[row][column] != "") {
                                    textColor()
                                    round++
                                    return;
                                }
    
								help = column;
								text = help.toString();
                                var myfield = document.getElementById((i-1) + text);							
                                myfield.classList.add(turn1);
								
								event.target.classList.remove(turn1);
    
								
								
                            }
                        }
                        textColor()
                        round++;
                    }
    
    
    
                }
    
                //dol 
    
                if ((column == 1 || column == 2 || column == 3 || column == 4 || column == 5 || column == 6 || column == 7 || column == 8 || column == 9) && (row == 10)) {
    
    
                    let j = 0;
    
                    if ((board[10][column] !== '') && (board[10][column] == turn1)) {
                        for (let i = 9; j < 1; i--) {
                            if (board[i][column] == '') {
    
                                board[i][column] = board[i + 1][column];
                                board[i + 1][column] = '';
                            }
                            else {
    
                               
    
                                event.target.classList.remove(turn1);
								board[10][column]='';
								 j = 1;
                                if (board[row][column] != "") {
                                    round++
                                    return;
                                }
                   
															help = column;
								text = help.toString();
                                var myfield = document.getElementById((i+1) + text);							
                                myfield.classList.add(turn1);
								
								event.target.classList.remove(turn1);
                            }
                        }
                        round++;
                    }
    
    
    
                }
    
            }
        if (round == 82) {
    
             xpoints = 0;
             opoints = 0;
    
    
            let header = document.querySelector("h2");
            header.innerText = "1SCORE: " + xscore + " 2SCORE: " + oscore;
            header.innerText = round;
    
    
    
            for (let i = 1; i < 4; i++) {
    
                for (let j = 1; j < 4; j++) {
                    if (board[i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (board[i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
            if (xpoints > opoints) {
                xscore = xscore + 1;
                console.log("W sektorze wygrywa 1" + xpoints);
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
                console.log("W sektorze wygrywa 2" + opoints);
            }
            if (opoints == xpoints) {
                console.log("Remis" + opoints);
            }
    
    
            //2
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 1; i < 4; i++) {
    
                for (let j = 4; j < 7; j++) {
                    if (board[i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (board[i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
                console.log("W sektorze wygrywa 1" + xpoints);
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
                console.log("W sektorze wygrywa 2" + opoints);
            }
            if (opoints == xpoints) {
                console.log("Remis" + opoints);
            }
    
            //3
            xpoints = 0;
            opoints = 0;
    
            for (let i = 1; i < 4; i++) {
    
                for (let j = 7; j < 10; j++) {
                    if (board[i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (board[i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
                console.log("W sektorze wygrywa 1" + xpoints);
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
                console.log("W sektorze wygrywa 2" + opoints);
            }
            if (opoints == xpoints) {
                console.log("Remis" + opoints);
            }
    
            //4
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 4; i < 7; i++) {
    
                for (let j = 1; j < 4; j++) {
                    if (board[i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (board[i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
                console.log("W sektorze wygrywa 1" + xpoints);
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
                console.log("W sektorze wygrywa 2" + opoints);
            }
            if (opoints == xpoints) {
                console.log("Remis" + opoints);
            }
    
            //5
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 4; i < 7; i++) {
    
                for (let j = 4; j < 7; j++) {
                    if (board[i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (board[i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
                console.log("W sektorze wygrywa 1" + xpoints);
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
                console.log("W sektorze wygrywa 2" + opoints);
            }
            if (opoints == xpoints) {
                console.log("Remis" + opoints);
            }
    
            //6
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 4; i < 7; i++) {
    
                for (let j = 7; j < 10; j++) {
                    if (board[i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (board[i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
                console.log("W sektorze wygrywa 1" + xpoints);
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
                console.log("W sektorze wygrywa 2" + opoints);
            }
            if (opoints == xpoints) {
                console.log("Remis" + opoints);
            }
    
            //7
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 7; i < 10; i++) {
    
                for (let j = 1; j < 4; j++) {
                    if (board[i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (board[i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
                console.log("W sektorze wygrywa 1" + xpoints);
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
                console.log("W sektorze wygrywa 2" + opoints);
            }
            if (opoints == xpoints) {
                console.log("Remis" + opoints);
            }
    
            //8
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 7; i < 10; i++) {
    
                for (let j = 4; j < 7; j++) {
                    if (board[i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
                    }
                    if (board[i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
                console.log("W sektorze wygrywa 1" + xpoints);
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
                console.log("W sektorze wygrywa 2" + opoints);
            }
            if (opoints == xpoints) {
                console.log("Remis" + opoints);
            }
    
            //9
    
            xpoints = 0;
            opoints = 0;
    
            for (let i = 7; i < 10; i++) {
    
                for (let j = 7; j < 10; j++) {
    
                    if (board[i][j] == 'fa-dragon') {
                        xpoints = xpoints + 1;
    
                    }
                    if (board[i][j] == 'fa-spider') {
                        opoints = opoints + 1;
                    }
                }
            }
    
            if (xpoints > opoints) {
                xscore = xscore + 1;
                console.log("W sektorze wygrywa 1" + xpoints);
            }
            if (opoints > xpoints) {
                oscore = oscore + 1;
                console.log("W sektorze wygrywa 2" + opoints);
            }
            if (opoints == xpoints) {
                console.log("Remis" + opoints);
            }
    
    
            if (xscore > oscore) {
                header = document.querySelector("h2");
                header.innerText = "Dragons WINS!";
            }
    
            if (oscore > xscore) {
                header = document.querySelector("h2");
                header.innerText = "Spiders WINS!";
            }
    
            if (oscore == xscore) {
                header = document.querySelector("h2");
                header.innerText = "Spiders WINS! (Draw by Points)";
            }
    
    
            header = document.querySelector("h3");
            header.innerText = "Sectors conquered by Dragons: " + xscore + "     ||    Sectors conquered by Spiders: " + oscore;
            round++;
        }
        function textColor() {
            if (round % 2 === 0) {
                var element2 = document.getElementById("dragons");
                var element = document.getElementById("spiders");
                element.style.color = "green";
                element2.style.color = "lightgrey";
            }
            else {
                var element = document.getElementById("spiders");
                var element2 = document.getElementById("dragons");
                element2.style.color = "red";
                element.style.color = "lightgrey";
            }
    
        }
        
		        if((round!=allowedmove)&&(round <= 45))
        {
         cpuset();
		 

		}
   
	
	       if((round!=allowedmove)&&(round > 46))
        {
         
            botmove();
			resetsim();
                        textColor()
						
    result = -100;
    oldresult=result;
        
    
        }
    }
	

	
	
    }