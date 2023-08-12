// Bài tập luyện thêm sửa xóa bằng javascript đơn giản 


var data = [
  // {
  //   msv:1,
  //   name:"Mai Trung Kien",
  //   age: 23

  // },
  // {
  //   msv:2,
  //   name:"Mai Trung Duy",
  //   age: 23

  // },
  // {
  //   msv:3,
  //   name:"Mai Trung Xuan",
  //   age: 23

  // }

];
function add(){
  var formmsv = document.getElementById("form-msv").value
  var formname = document.getElementById("form-name").value
  var formage = document.getElementById("form-age").value
  

  var item = {
      msv: formmsv,
      name: formname,
      age: formage 
  }
  // Phần này của sửa xóa đi thêm mới   
  let index = data.findIndex((c)=>c.msv==item.msv)
  if(index>=0){
    data.splice(index,1,item)
  }
  else{
    data.push(item)
  }

  render()
  clear()
  deleteItem()
  editItem()
  
}
add()
// Phần search--msv tự tăng 
function search(){
  var btnSearch = document.getElementById('btn-search').value
  var inputSearch = document.getElementById('search').value
  var kq=[];
  if(inputSearch){
    for( let i=0; i<data.length; i++){
      var str = data[i].name;
      // So sánh từng phần tử str với từng cái nhập ở thằng inputSearch
      if(str.includes(inputSearch)){
        var itemSearch = {
          id: data[i].msv,
          name: data[i].name,
          age: data[i].age

        }
        kq.push(itemSearch)
        console.log(kq)
      }


    }
  }  
}
search()




function render(){
    htmls = `
    <li class="item-student">
    <div class="row">
      <div class="col-3 center">MSV</div>
      <div class="col-3 center">HỌ VÀ TÊN</div>
      <div class="col-3 center">TUỔI</div>
    </div>
  </li>
    `
    for(let i=0; i<data.length; i++){
        htmls += `
        <li class="item-student">
        <div class="row">
          <div class="col-3 center">${data[i].msv}</div>
          <div class="col-3 center">${data[i].name}</div>
          <div class="col-3 center">${data[i].age}</div>
          <button class="btn-delete" onclick="deleteItem(${data[i].msv})" >DELETE</button>
          <button class="btn-delete" onclick="editItem(${data[i].msv})" >EDIT</button>
        </div>
      </li>
        `
    }
    document.getElementById("render").innerHTML = htmls

}
// delete item
function deleteItem(x){
    for( let i=0; i<data.length; i++){
   if(data[i].msv==x){
    data.splice(i,1)
    render()
   }
}
}
// Hàm sửa 
function editItem(x){
    for( let i=0; i<data.length; i++){
   if(data[i].msv==x){
    document.getElementById("form-msv").value = data[i].msv
    document.getElementById("form-name").value = data[i].name
    document.getElementById("form-age").value = data[i].age
        }
    }
}
// Hàm Xóa 
function clear(){
    document.getElementById("form-msv").value="";
    document.getElementById("form-name").value="";
    document.getElementById("form-age").value="";
}














