module.exports = (data) => ({
  date: data.CaptureTime,
  title: data.Name,
  remote_id: data.ID,
  remote_service: 's3',
})