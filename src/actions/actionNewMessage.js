export default newMessages = (id, nickName, text) => ({
    type: 'NEW_MESSAGES',
    id, 
    nickName,
    text
})