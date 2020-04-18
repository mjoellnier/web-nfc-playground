export enum WriteTypes {
  TEXT,
  URL,
}

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

export const createWriteRecord = (
  type: WriteTypes,
  content: string,
  language?: string
) => {
  switch (type) {
    case WriteTypes.TEXT:
      return createWritableText(language, content);
    case WriteTypes.URL:
      return createWritableUrl(content);
    default:
      break;
  }
};

/**
 * A helper method to create the text record to write on a nfc device.
 * @param language The chosen user language
 * @param content The content that has to be written
 */
const createWritableUrl = (url: string) => {
  return {
    records: [
      {
        recordType: "url",
        data: url,
      },
    ],
  };
};

/**
 * A helper method to create the text record to write on a nfc device.
 * @param language The chosen user language
 * @param content The content that has to be written
 */
const createWritableText = (language: string = "de-DE", content: string) => {
  return {
    records: [
      {
        recordType: "text",
        lang: language,
        encoding: "utf-8",
        data: content,
      },
    ],
  };
};
