var k;
var i;
var j;
var record={};
for(j=0;j<list_city.length;j++)
{       listall[j]=[];
         i=0;
         k=0;
        for (i = 0; i < result.length; i++) {
            if(result[i].city===list_city[j])
                {
                    listall[j][k++]=result[i];
                    console.log(i,'     ',result[i]);
                }
        };
        console.log('result  \n',listall[j]);
        
        record.list_city[j]=listall[j];
        console.log('Record of ',list_city[j],'is',record);
 };