export const handleNfcData = async (data: any) => {
  let result: {
    recordType: string;
    mediaType: string;
    id: string;
    original: string;
  } = {
    id: "pending",
    original: JSON.stringify(data),
    recordType: "pending",
    mediaType: "pending",
  };
  const message = data.message;
  for (const record of message.records) {
    // Logging
    console.log("Record type:  " + record.recordType);
    console.log("MIME type:    " + record.mediaType);
    console.log("Record id:    " + record.id);
    // Adding to return object
    result.mediaType = record.mediaType;
    result.id = record.id;
    switch (record.recordType) {
      case "text":
        const textDecoder = new TextDecoder(record.encoding);
        result.recordType = `Text: ${textDecoder.decode(record.data)} (${
          record.lang
        })`;
        break;
      case "url":
        result.recordType = `URL: ${record.recordType}`;
        break;
      default:
        result.recordType = `Default: ${record.recordType}`;
    }
  }
  return result;
};
