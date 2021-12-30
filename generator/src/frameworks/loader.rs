use std::collections::HashMap;

use crate::frameworks::express::Express;

use super::framework::Framework;

macro_rules! init {
    ( $( $x:ident ),* ) => {
        {
            let mut frameworks: FrameworkMap = HashMap::new();

            $(
                frameworks.insert($x.name().to_string(), Box::from($x));
            )*

            frameworks
        }
    };
}

pub type FrameworkMap = HashMap<String, Box<dyn Framework>>;

pub fn init() -> FrameworkMap {
    init![Express]
}
