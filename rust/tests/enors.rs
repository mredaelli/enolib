#[test]
fn parse() {
    let input = String::from(">language: eno");

    let document = enors::parse(&input, false); // .unwrap();

    // let language = document.string("language", true).unwrap().unwrap();

    // assert_eq!(language, "eno");
}
