export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'microsoft365' : IDL.Func([IDL.Text, IDL.Text], [IDL.Bool], []),
    'register' : IDL.Func([IDL.Text, IDL.Text], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
