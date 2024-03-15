let BookInstance = require('../models/bookinstance');

get_status_list = async() => {
  let bookinstances_List = await BookInstance
  .find({status:"Available"})
  .populate('book')
  return bookinstances_List.map(b => `${b.book.title}: ${b.status}`)
}
exports.show_all_books_status = function(res) {
  get_status_list()
    .then((data)=>res.send(data))
    .catch((_)=>res.send('get status list error'))
}