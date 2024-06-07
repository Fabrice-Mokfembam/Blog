import { format as timeAgo } from "timeago.js";
import moment from "moment";

function countWords(string) {
    const requiredString =  string.split(' ').slice(0,14).join(' ');
    return requiredString;
}

function getAuthorName(authorId, authorsArray) {
    const author = authorsArray.filter(item => {
        return item._id === authorId;
    })
    console.log(author);
    if (author) {
        return author[0].name;
    }
    return 'writer'
}

function getAuthorImage(authorId, authorsArray) {
    const author = authorsArray.filter(item => {
        return item._id === authorId;
    })
    if (author) {
        return author[0].image;
    }
  return null;
}

function getBlogById(Id, blogsArray) {
    const blog = blogsArray.filter(item => {
        return item._id === Id ;
    })
    if (blog) {
        return blog;
    }
  return null;
}

  const formatDate = (datesent) => {
    const date = new Date(datesent);
    const now = new Date();

    if (now - date >= 24 * 60 * 60 * 1000) {
      return moment(date).format("DD/MM/YYYY");
    }
    return timeAgo(date);
  };

export { countWords,getAuthorName,formatDate,getAuthorImage,getBlogById };