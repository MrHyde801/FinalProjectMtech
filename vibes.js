let state = [

]

window.onload = function() {
    populateComment()
}


function populateComment() {
    $('#commenths').empty()
    state.forEach(function(item, index) {
        $('#commenths').prepend(`
        <div class="commContainer">
            <img src="/Images/default.png" class"img" alt="default Icon">
                <div class="textBox">
                    <h3>${item.displayName}</h3>
                    <h4>${item.commenth}</h4>
                    <input type="text" id="yoMomma-${index}" value="${item.commenth}"/>
                    <button id="isFat-${index}" onclick="submitComment(${index})">Submit</button>
                    <div class="spanDiv">
                        <span onclick="editComment(${index})">Edit</span>
                        <span>|</span>
                        <span onclick="deleteComment(${index})">Delete</span>
                    </div>
                </div>
        </div>`)
    })
} 

function editComment(index) { 
    $(`#yoMomma-${index}`).css('display','inline');
    $(`#isFat-${index}`).css('display', 'inline');
    //when we click submit the value changes to newVal
}

function submitComment(index) {
    let newInfo = $(`#yoMomma-${index}`).val()
    state[index].commenth = newInfo
    populateComment()
}

function deleteComment(index) {
    state.splice(index,1);
    populateComment()
}

$('#pHolder').on('click', function() {
    let displayVal = $('#displayName').val()
    let commentVal = $('#comment').val()
    let newComment = {
        displayName: displayVal,
        commenth: commentVal
    }
    state.push(newComment)
    console.log(state)
    populateComment()
})