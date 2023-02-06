var convert = require("xml-js");

export const AlternarBadResponse = (
  name: string,
  messageError: string,
  code: number
) => {
  return convert.json2xml(
    {
      PKT: {
        Result: {
          _attributes: {
            Name: name,
            Success: 0,
          },
          Returnset: {
            Error: {
              _attributes: {
                Type: "string",
                Value: messageError,
              },
            },
            ErrorCode: {
              _attributes: {
                Type: "int",
                Value: code,
              },
            },
          },
        },
      },
    },
    { compact: true, ignoreComment: true, spaces: 4 }
  );
};

export const AlternarSuccessResponse = (name: string, resultData: any) => {
  let Returnset = {};
  for (const key in resultData) {
    const element = resultData[key];
    Returnset[key] = {
      _attributes: {
        Type: "string",
        Value: element,
      },
    };
  }
  return convert.json2xml(
    {
      PKT: {
        Result: {
          _attributes: {
            Name: name,
            Success: 1,
          },
          Returnset,
        },
      },
    },
    { compact: true, ignoreComment: true, spaces: 4 }
  );
};

export const AlternarParseToSimpleJSON = (params: any) => {
  let data = {};
  for (const key in params) {
    const item = params[key];
    const itemKeyLength = Object.keys(item).length;
    if (typeof item === "object" && Array.isArray(item)) {
      data[key] = [];
      for (const key2 in item) {
        item[key2][key] = {
          _attributes: { Value: item[key2]._attributes.Value },
        };
        delete item[key2]._attributes;
        data[key].push(AlternarParseToSimpleJSON(item[key2]));
      }
    }
    if (typeof item === "object" && !Array.isArray(item) && !item._attributes) {
      data[key] = AlternarParseToSimpleJSON(item);
    }
    if (
      typeof item === "object" &&
      !Array.isArray(item) &&
      item._attributes &&
      itemKeyLength === 1
    ) {
      data[key] = item._attributes.Value;
    }
    if (
      typeof item === "object" &&
      !Array.isArray(item) &&
      item._attributes &&
      itemKeyLength > 1
    ) {
      item[key] = { _attributes: { Value: item._attributes.Value } };
      delete item._attributes;
      data[key] = AlternarParseToSimpleJSON(item);
    }
  }
  return data;
};
